import { ScrapeMetaData } from "../../src/shared/types";
import { Connection } from "../connection";

export default class ScrapeDataDAO {

    async getAllScrapeData(
        db: Connection,
        params: {
            id?: number;
            website?: string;
            vendor?: string;
        }): Promise<ScrapeMetaData[]> {
        const { id, website, vendor } = params;

        const records: ScrapeMetaData[] | null = await db.scrape_data.findAllUX({
            id, website, vendor
        })
        if (!records) {
            return [];
        } else {
            return records;
        }
    }
}