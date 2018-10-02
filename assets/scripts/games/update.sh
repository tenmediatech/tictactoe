# sh curl-scripts/json/sign-up.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
          "id":
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'

echo
