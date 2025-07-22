import requests
from requests.structures import CaseInsensitiveDict

url_geocoding = "https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=6edd775093a74b67ad2b8a6efe4479a0"
url_places = "https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=6edd775093a74b67ad2b8a6efe4479a0"

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"

resp_geocoding = requests.get(url_geocoding, headers=headers)
resp_places = requests.get(url_places, headers=headers)

print("Geocoding status:", resp_geocoding.status_code)
print("Geocoding response:", resp_geocoding.json())

print("Places status:", resp_places.status_code)
print("Places response:", resp_places.json())

