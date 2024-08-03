from sentiment_analyzer import predict_sentiment

ACTIONS = 'Resolve,Pin,Dismiss'

reviews = [
    {'message': 'I did not really like this place at all.',                 'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'The food was enjoyable!',                                  'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'This place was honestly a wonderful experience.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'I will never come back here. The bathrooms were nasty.',   'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'What surprised me was their gyro. It was yummy.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'They should clean up the bathrooms!',                      'sentiment': 'Negative', 'users': '', 'action': ACTIONS}
]

for review in reviews:
        reviewInput = review['message']
        predict_sentiment(reviewInput)