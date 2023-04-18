#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import folium
import mysql.connector
from datetime import datetime

# Connect to the MySQL database
db = mysql.connector.connect(
    host="167.172.153.87",
    user="gentech",
    password="gentech123",
    database="onetapalertffe"
)

# Get the current year
current_year = datetime.now().year

# Define the SQL query to get the latitude, longitude, and date_finished for a specific year
query = "SELECT latitude, longitude, emergency_type_id, date_finished FROM emergencies WHERE YEAR(date_finished) = %s AND emergency_type_id = 1"
year = 2018

# Execute the query and get the results
cursor = db.cursor()
cursor.execute(query, (year,))
results = cursor.fetchall()

# Create a map object centered at a specific latitude and longitude
map = folium.Map(location=[14.5794, 121.0359], zoom_start=14)

# Create a heatmap layer using the latitude and longitude data
heatmap_data = [[row[0], row[1]] for row in results]
heatmap_layer = folium.plugins.HeatMap(heatmap_data).add_to(map)

# Close the cursor and database connection
cursor.close()
db.close()

# Display the map
map.save('heatmap.html')

