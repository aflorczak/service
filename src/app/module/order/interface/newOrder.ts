export interface NewOrder {
    clientsData? : string;
    // internalCaseNumber? : string;
    externalCaseNumber? : string;
    segment? : string;
    comments? : string;
    deliveryAddress?: string;
    deliveryDate?: string;
    deliveryComments?: string;
    deliveryBranch? : string;
    returnAddress?: string;
    returnDate?: string;
    returnComments?: string;
    returnBranch? : string;
}