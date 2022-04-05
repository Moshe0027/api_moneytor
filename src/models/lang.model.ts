import mongoose from "mongoose";

export interface LangDocument extends mongoose.Document {
    word_code: string
    lang: string
    text: string
}

const LangSchema = new mongoose.Schema({
    word_code: {
        type: String, required: true,
    },
    lang: {
        type: String, required: true
    },
    text: { type: String, required: true },
});

const langModel = mongoose.model<LangDocument>("LangService", LangSchema);

export default langModel;