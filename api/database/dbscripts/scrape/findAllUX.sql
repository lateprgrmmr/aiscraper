
SELECT
    *
FROM scrape_data
WHERE LOWER(website) ILIKE '%' || ${website} || '%'
OR LOWER(vendor) ILIKE '%' || ${vendor} || '%'
;
