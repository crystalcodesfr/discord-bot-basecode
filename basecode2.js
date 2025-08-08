import requests
import json

# Replace with your Discord webhook URL
webhook_url = "https://discord.com/api/webhooks/your-webhook-id/yourhook-token"

# Function to get the public IP address
def get_ip():
response = requests.get("https://api.ipify.org?format=json")
ip_data = response.json()
return ip_data["ip"]

# Function to send IP address to Discord webhook
def send_to_discord(ip):
data = {
"content": f"IP Address: {ip}"
}
headers = {
"Content-Type": "application/json"
}
response = requests.post(webhook_url, data=json.dumps(data), headers=headers)
if response.status_code == 204:
print("IP address sent successfully!")
else:
print("Failed to send IP address.")

if __name__ == "__main__":
ip_address = get_ip()
send_to_discord(ip_address)
