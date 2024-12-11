import { useEffect, useState } from "react";
import TextField from "./common/TextField";
import { Button } from "@mui/material";
import ScrapeTable from "./common/ScrapeTable";
import { ScrapeMetaData } from "../shared/types";

const dummyData: ScrapeMetaData[] = [
    {
        id: 1,
        website: "https://example.com",
        vendor: "example",
        noOfObits: 10,
    },
    {
        id: 2,
        website: "https://example2.com",
        vendor: "example2",
        noOfObits: 20,
    },
]

const MainPage = () => {
    const [website, setWebsite] = useState("");
    const [vendor, setVendor] = useState("");
    const [scrapeMetaData, setScrapeMetaData] = useState<ScrapeMetaData[]>(dummyData);

    useEffect(() => {
        setScrapeMetaData(scrapeMetaData);
    }, [scrapeMetaData]);

    const handleScrapeButtonClick = () => {
        console.log('Scrape button clicked', website, scrapeMetaData);
        setScrapeMetaData([
            ...scrapeMetaData,
            {
                id: scrapeMetaData.length + 1,
                website,
                vendor: "example",
                noOfObits: 10,
            }
        ]);
        setWebsite("");
    }

    return (
        <div>
            <div>
                <h1>My App</h1>
                <p>Welcome to my app!</p>
            </div>
            <TextField
                label="Website to scrape"
                value={website}
                onChange={setWebsite}
            />
            <TextField
                label="Vendor"
                value={vendor}
                onChange={setVendor}
            />
            <div>
                <Button
                    size="medium"
                    variant="contained"
                    onClick={handleScrapeButtonClick}
                >
                    Scrape!
                </Button>
            </div>
            <div>
                <h2>Scraped Data</h2>
                <ScrapeTable scrapeMetaData={scrapeMetaData} />
            </div>
        </div>
    );
}

export default MainPage;