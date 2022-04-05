import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import langModel ,{ LangDocument } from "../models/lang.model";

export const createWord = async (input: DocumentDefinition<Omit<LangDocument, 'createdAt' | 'updatedAt'>>) => {
    return langModel.create(input);
}

export const findOneWord = async (query: FilterQuery<LangDocument>, options: QueryOptions = { lean: true }) => {
    return langModel.findOne(query, {}, options);
}
