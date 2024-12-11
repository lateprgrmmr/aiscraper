
CREATE TABLE website_vendors (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scraper_insights (
    id SERIAL PRIMARY KEY,
    url TEXT,
    method TEXT,
    analysis JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE html_analysis (
    id SERIAL PRIMARY KEY,
    url TEXT,
    html_snippet TEXT,
    insights JSONB, -- Store LLM output here
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);