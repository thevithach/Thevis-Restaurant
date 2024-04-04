export enum SD_Roles {
  ADMIN = "admin",
  CUTOMER = "customer",
}

export enum SD_Status {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  BEING_COOKED = "Being Cooked",
  READY_FOR_PICKUP = "Ready for Pickup",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export enum SD_Categories {
  APPETIZER = "Appetizer",
  ENTREE = "Entrée",
  DESSERT = "Dessert",
  DRINK = "Drink",
}

export enum SD_SortTypes {
  PRICE_LOW_TO_HIGH = "Price Low - High",
  PRICE_HIGH_TO_LOW = "Price High - Low",
  NAME_A_TO_Z = "Name A - Z",
  NAME_Z_TO_A = "Name Z - A",
}
