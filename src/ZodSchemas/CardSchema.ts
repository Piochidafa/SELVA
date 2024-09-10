import { z } from 'zod';

export const CardSchema = z.object({

    titulo: z.string({
        required_error: "Titulo é Obrigatorio"
    }),
    desc: z.string({
        required_error: "A descrição é Obrigatoria"
    }),
    prioridade: z.number().optional()

})