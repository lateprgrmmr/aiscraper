import { DataGrid } from "@mui/x-data-grid";
import { ScrapeMetaData } from "../../shared/types";

interface ScrapeTableProps {
    scrapeMetaData: ScrapeMetaData[];
}

const ScrapeTable = (props: ScrapeTableProps) => {
    const { scrapeMetaData } = props;
    return (
        <DataGrid
            rows={scrapeMetaData}
            columns={[
                { field: "website", headerName: "Website", width: 200 },
                { field: "vendor", headerName: "Vendor", width: 200 },
                { field: "noOfObits", headerName: "No of Obits", width: 200 },
            ]}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    );
};

export default ScrapeTable;