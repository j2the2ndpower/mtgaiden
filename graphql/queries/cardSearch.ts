import { gql } from '@apollo/client';

export const SEARCH_CARDS = gql`
  query Query($grpId: Int, $format: Int, $locale: String) {
    getCard(GrpId: $grpId, format: $format, locale: $locale) {
      GrpId
      Title
      TypeText
      SubtypeText
      Power
      Toughness
      Types
      Subtypes
    }
  }
`;