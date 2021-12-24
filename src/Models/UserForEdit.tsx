import Phone from './Phone';
import Email from './Email';

export default interface UserForEdit {
	id: number;
	username: string;
	name: string;
	lastName: string;
	pass: string;
	phones: Phone[];
	emails: Email[];
	avatar: string;
	cover: string;
	bio: string;
	gender: string;
}
