# sh curl-scripts/json/sign-up.sh

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games/" \
--header "Authorization: Token token=${TOKEN}" \
--data "{}"

echo
