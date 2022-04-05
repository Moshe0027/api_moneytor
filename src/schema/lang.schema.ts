import { object, string, TypeOf } from 'zod'

const payload = {
    body: object({
        word_code: string(),
        lang: string().min(2).max(2),
        text: string().min(1).max(200),
    }),
}
const params = {
    params: object({
        word_code: string({
            required_error: 'word code is required'
        }), lang: string({
            required_error: 'lang is required',
        }).min(2).max(2)
    })
}
export const createWordSchema = object({
    ...payload
})

export const getWordSchema = object({
    ...params
})

export type CreateWordInput = TypeOf<typeof createWordSchema>
export type ReadWordInput = TypeOf<typeof getWordSchema>

