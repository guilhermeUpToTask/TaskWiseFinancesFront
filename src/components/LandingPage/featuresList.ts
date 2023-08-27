import MoneyIcon from '../../assets/icons/MoneyIcon';
import ClockIcon from '../../assets/icons/ClockIcon';
import CreditIcon from '../../assets/icons/CreditIcon';
import StatsBarIcon from '../../assets/icons/StatsBarIcon';
import { ICustomIconProps } from '../../lib/types';

export type Feature = {
    title: string;
    description: string;
    Icon: (props: ICustomIconProps) => React.ReactElement;
}


const featuresList: Feature[] = [
    {
        title: 'Wallet Manager',
        description:
            "Effortlessly manage your finances with our app's robust wallet system. Seamlessly track expenses and income while enjoying a user-friendly experience.",
        Icon: MoneyIcon,

    },
    {
        title: 'Money Projection',
        description: "Unlock the power of foresight with our Money Projection feature. Seamlessly leveraging advanced algorithms, this tool analyzes your past income, expenses, and payments to project your financial path ahead.",
        Icon: ClockIcon,

    },
    {
        title: 'Bill System',
        description: "Never Miss a Beat: Seamlessly integrated into our personal finance app, the Bill Control System is your ultimate financial ally, ensuring you're always on top of your bills and payments.",
        Icon: CreditIcon,

    },
    {
        title: 'Relatory System',
        description: "Unearth Financial Clarity: Within our personal finance app, the Relatory System emerges as your beacon to illuminate profound insights into your financial landscape.",
        Icon: StatsBarIcon,

    },
]

export default featuresList;