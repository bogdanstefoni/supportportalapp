export class User {
    public id?: number;
    public userId?: string;
    public firstName = '';
    public lastName = '';
    public username = '';
    public email = '';
    public loginDisplayDate?: Date;
    public joinDate?: Date;
    public profileImageUrl?: string;
    public active = false;
    public notLocked = false;
    public role = '';
    public authorities: string[] = [];
}
