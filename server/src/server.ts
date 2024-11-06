import { Elysia, t } from 'elysia';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = new Elysia()
	.post(
		'/login',
		async ({ body }) => {
			const { email, password } = body;
			const user = await prisma.user.findUnique({
				where: { email: email },
			});
			if (user === null) return 'não existe';
			if (user.password != password) return 'não pode';
			return 'sim';
		},
		{
			body: t.Object({
				email: t.String(),
				password: t.String(),
			}),
		}
	)
	.listen(3000);
