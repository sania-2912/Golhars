# recommend.py
import sys
import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample format for now (will fetch from DB later)
paintings = [
    {"_id": "1", "title": "Sunset", "tags": "sunset landscape warm"},
    {"_id": "2", "title": "Ocean", "tags": "blue ocean water"},
    {"_id": "3", "title": "Mountains", "tags": "mountain nature cold"},
    {"_id": "4", "title": "Fire Sky", "tags": "sunset orange fire warm"},
]

# Parse input tags
input_tags = sys.argv[1] if len(sys.argv) > 1 else ""
input_tags = input_tags.replace(",", " ")

# All tag strings (DB + input)
all_tags = [p["tags"] for p in paintings] + [input_tags]

# TF-IDF + Cosine
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(all_tags)
cosine_sim = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])

# Get top N similar
top_indices = cosine_sim.argsort()[0][-3:][::-1]
recommended = [paintings[i] for i in top_indices]

# Return as JSON
print(json.dumps(recommended))
