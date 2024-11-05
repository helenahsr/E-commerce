import { Hono } from 'hono'
import { neon } from "@neondatabase/serverless";

const app = new Hono()
const sql = neon(process.env.DATABASE_URL);

app.get('/', async (c) => {
  const users = await sql`SELECT * FROM "Users"`
  return c.json(users);
})

export default app
