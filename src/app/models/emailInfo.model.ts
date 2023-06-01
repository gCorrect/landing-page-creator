export enum MailType {
  CONFIRM = "confirm",
  CANCEL = "cancel",
  REMINDER = "reminder",
  DEPOSIT = "deposit",
  CARDDETAILS = "card_details",
}

export interface EmailInfo {
  logo?: string;
  image?: string;
  mailType?: MailType;
  title?: string;
  text?: string;
  titleGr?: string;
  textGr?: string;
  noReply?: string;
  noReplyGr?: string;
}

