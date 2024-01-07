import { FieldPacket, RowDataPacket } from 'mysql2';
import { pool } from '../database/database';
import { Card, CardResolverArgs } from '@interfaces';

const defaultLocale = 'enUS';
export const getLocale = (locale: string): string => {
    if (['enus', 'ptbr', 'frfr', 'itit', 'dede', 'eses', 'ruru', 'jajp', 'kokr', 'zhcn', 'zhtw'].indexOf(locale.toLowerCase()) >= 0) {
        return locale.toLowerCase().substring(0,2) + locale.toUpperCase().substring(2,4);
    }

    return defaultLocale;
};

const defaultFormatted = 1;
export const getFormat = (format: number): number => {
    return [0,1,2].indexOf(format) >= 0 ? format : defaultFormatted;
};

const cardsQuery = (locale?: string, format?: number) => {
    locale = getLocale(locale ?? defaultLocale);
    format = getFormat(format ?? defaultFormatted);

    return `SELECT Cards.*, 
    (SELECT TitleLocalization.${locale} FROM Localizations as TitleLocalization WHERE TitleLocalization.LocId = Cards.TitleId AND TitleLocalization.Formatted = ${format}) as Title,
    (SELECT AltTitleLocalization.${locale} FROM Localizations as AltTitleLocalization WHERE AltTitleLocalization.LocId = Cards.AltTitleId AND AltTitleLocalization.Formatted = ${format}) as AltTitle,
    (SELECT FlavorTextLocalization.${locale} FROM Localizations as FlavorTextLocalization WHERE FlavorTextLocalization.LocId = Cards.FlavorTextId AND FlavorTextLocalization.Formatted = ${format}) as FlavorText,
    (SELECT ReminderTextLocalization.${locale} FROM Localizations as ReminderTextLocalization WHERE ReminderTextLocalization.LocId = Cards.ReminderTextId AND ReminderTextLocalization.Formatted = ${format}) as ReminderText,
    (SELECT TypeTextLocalization.${locale} FROM Localizations as TypeTextLocalization WHERE TypeTextLocalization.LocId = Cards.TypeTextId AND TypeTextLocalization.Formatted = ${format}) as TypeText,
    (SELECT SubtypeTextLocalization.${locale} FROM Localizations as SubtypeTextLocalization WHERE SubtypeTextLocalization.LocId = Cards.SubtypeTextId AND SubtypeTextLocalization.Formatted = ${format}) as SubtypeText
    FROM Cards`;
};

export const resolvers = {
    Query: {
      getCard: async (parent: Card, {locale, format, GrpId}: CardResolverArgs) => {
        const [rows] = <[RowDataPacket[], FieldPacket[]]> await pool.promise().query(cardsQuery(locale, format) + ' WHERE GrpId = ?', [GrpId]);
        return rows.length === 1 ? rows[0] : null;
      },
      getAllCards: async (parent: Card, {locale, format}: CardResolverArgs) => {
        const [rows] = await pool.promise().query(cardsQuery(locale, format));
        return rows;
      },
    },
};