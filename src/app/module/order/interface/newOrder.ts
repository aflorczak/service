export interface NewOrder {
    clientsData? : string;
    principal?: string;
    externalCaseNumber? : string;
    segment? : string;
    comments? : string;
    deliveryAddress?: string;
    deliveryDate?: string;
    deliveryTime?: string;
    deliveryComments?: string;
    deliveryBranch? : string;
    returnAddress?: string;
    returnDate?: string;
    returnTime?: string;
    returnComments?: string;
    returnBranch? : string;
}