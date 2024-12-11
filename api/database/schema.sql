
CREATE TABLE html_analysis (
    id SERIAL PRIMARY KEY,
    url TEXT,
    html_snippet TEXT,
    insights JSONB, -- Store LLM output here
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE decedent_data (
    id SERIAL PRIMARY KEY,
    dob DATE,
    dod DATE,
    obituary TEXT,
    service_info TEXT,
    media JSONB,
    condolences JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
