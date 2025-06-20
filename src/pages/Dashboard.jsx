import CardContainer from "../components/DashboardComponents/CardContainer";
import ReferralInfo from "../components/DashboardComponents/ReferralInfo";
import TopSearchBar from "../components/DashboardComponents/Topsearchbar";
import Table from "../components/DashboardComponents/Table";


export default function Dashboard () {
    return(
        <>
            <div>
                <TopSearchBar/>
                <CardContainer/>
                <ReferralInfo/>
                <Table/>
            </div>
        </>
    )
}