@echo off
echo Invoke Lambda

aws lambda invoke --function-name=demo_lambda --invocation-type=RequestResponse --payload "{ 'test': 'value' }" --log-type=Tail


rem /dev/null | jq -r '.LogResult' | base64 --decode