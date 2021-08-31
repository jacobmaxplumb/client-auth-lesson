export class User {
    uid: string = '';
    email: string | null = '';
    displayName: string | null = '';
    constructor(initialValues?: Partial<User>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}