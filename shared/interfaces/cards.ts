export interface ResolverContext {
  // You can define the context type here if needed
}

export interface CardResolverArgs {
  GrpId: number;
  locale?: string;
  format?: number;
}

export interface CardResolver {
  getCard: (args: CardResolverArgs) => Promise<Card | null>;
  getAllCards: () => Promise<Card[]>;
  createCard: (args: CardResolverArgs) => Promise<Card>;
  updateCard: (args: CardResolverArgs) => Promise<Card | null>;
  deleteCard: (args: CardResolverArgs) => Promise<string | null>;
}

export interface Card {
    GrpId: number;
    ArtId: number; 
    ArtPath: string; 
    TitleId: number; 
    Title: string;
    AltTitleId: number; 
    AltTitle: string;
    FlavorTextId: number; 
    FlavorText: string;
    ReminderTextId: number; 
    ReminderText: string;
    TypeTextId: number; 
    TypeText: string;
    SubtypeTextId: number;
    SubtypeText: string;
    ArtistCredit: string;
    ArtSize: number;
    Rarity: number;
    ExpansionCode: string;
    DigitalReleaseSet: string; 
    IsToken: boolean;
    IsPrimaryCard: boolean;
    IsDigitalOnly: boolean;
    IsRebalanced: boolean;
    RebalancedCardGrpId: number; 
    DefunctRebalancedCardGrpId: number; 
    AlternateDeckLimit: number; 
    CollectorNumber: string; 
    CollectorMax: string; 
    UsesSideboard: boolean;
    OldSchoolManaText: string; 
    LinkedFaceType: number; 
    RawFrameDetail: string; 
    Watermark: string; 
    TextChangeData: string; 
    Power: string; 
    Toughness: string; 
    Colors: string; 
    ColorIdentity: string; 
    FrameColors: string; 
    IndicatorColors: string; 
    Types: string; 
    Subtypes: string; 
    Supertypes: string; 
    AbilityIds: string; 
    HiddenAbilityIds: string; 
    LinkedFaceGrpIds: string; 
    LinkedAbilityTemplateCardGrpIds: string; 
    AbilityIdToLinkedTokenGrpId: string; 
    AbilityIdToLinkedConjurations: string; 
    KnownSupportedStyles: string; 
    AdditionalFrameDetails: string; 
    ExtraFrameDetails: string; 
    Tags: string; 
    Order_LandLast: number; 
    Order_ColorOrder: number; 
    Order_CreaturesFirst: number; 
    Order_ManaCostDifficulty: number; 
    Order_CMCWithXLast: number; 
    Order_Title: string; 
    Order_MythicToCommon: number; 
    Order_BasicLandsFirst: number;
}
