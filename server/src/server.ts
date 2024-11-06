import { Elysia, t } from 'elysia';
import { PrismaClient } from '@prisma/client';
import { swagger } from '@elysiajs/swagger'

const prisma = new PrismaClient();

new Elysia()
    .use(swagger())
	.post('/login',	async ({ body }) => {
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
    .post('/register', async ({ body }) => {
        const { email, password } = body
        const user = await prisma.user.findUnique({
            where: { email: email },
        });
        if (user !== null) return 'ja existe'
        await prisma.user.create({
            data: {
                email: email,
                password: password,
            }
        })
        return 'criado'
    }, {
        body: t.Object({
            email: t.String(),
            password: t.String(),
        }),
    })
	.listen(3000);
