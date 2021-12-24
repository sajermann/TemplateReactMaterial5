import Application from './Application';

export default interface Permission {
	id?: number;
	name: string;
	application: Application;
}
