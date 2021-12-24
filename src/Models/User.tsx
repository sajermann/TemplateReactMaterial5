import Phone from './Phone';
import Email from './Email';
import Permission from './Permission';

export default interface User {
	id: number;
	username: string;
	name: string;
	lastName: string;
	permissions: Permission[];
	phones: Phone[];
	emails: Email[];
	avatar: string;
	cover: string;
	bio: string;
	darkMode: boolean;
	gender: string;
	jwt: string;
}
