-- G.R. Estates property listings (current on-market), for site search.
CREATE TABLE IF NOT EXISTS listings (
  id         TEXT PRIMARY KEY,
  kind       TEXT NOT NULL,   -- 'sale' | 'let'
  status     TEXT,            -- For Sale, Under Offer, Sold STC, To Let, Let Agreed
  price      INTEGER,         -- sale price, or rent pcm for lettings
  address    TEXT,
  town       TEXT,
  postcode   TEXT,
  beds       INTEGER,
  baths      INTEGER,
  type       TEXT,            -- House, Flat, Bungalow, etc.
  style      TEXT,
  image      TEXT,
  updated_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_listings_kind  ON listings(kind);
CREATE INDEX IF NOT EXISTS idx_listings_price ON listings(price);
CREATE INDEX IF NOT EXISTS idx_listings_beds  ON listings(beds);
CREATE INDEX IF NOT EXISTS idx_listings_town  ON listings(town);
