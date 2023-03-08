export interface Order {
    id?: number;
    status?: string;
    clientsData?: string;
    principal?: string;
    internalCaseNumber?: string;
    externalCaseNumber?: string;
    segment?: string;
    deliveryAddress?: string;
    deliveryDate?: string;
    deliveryTime?: string;
    deliveryComments?: string;
    deliveryBranch?: string;
    returnAddress?: string;
    returnDate?: string;
    returnTime?: string;
    returnComments?: string;
    returnBranch?: string;
    archive?: boolean;
    reasonForCancelingTheOrder?: string;
}