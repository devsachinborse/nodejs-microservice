import bcrypt from "bcrypt";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

class AuthHandler {
  static async register(req, res) {
    try {
      const payload = req.body;
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      const user = await prisma.user.create({
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        },
      });

      return res.json({ message: "use account created successfully...", user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "somtinng went wroung please try again..", error });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (user) {
        // *Check both password
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });

        return res.json({
          message: "Logged in successfully!",
          access_token: `Bearer ${token}`,
        });
      }

      return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong." });
    }
  }

  static async user(req, res) {
    const user = req.user;
    return res.status(200).json({ user: user });
  }
}

export default AuthHandler;
