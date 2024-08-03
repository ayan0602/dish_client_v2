from flask import Flask, jsonify
from sentiment_analyzer import predict_sentiment

class Updater:
    def __init__(self, app, key, data) -> None:
        self.app = app
        self.data = data
        self.key = key
        self.register_route()
        self.send_update()

    def send_update(self):
        return jsonify(self.data)
    
    def register_route(self):
        endpoint = f'update_{self.key.strip("/")}'
        with self.app.app_context():
            self.app.add_url_rule(self.key, endpoint=endpoint, view_func=self.send_update)

ACTIONS = 'Resolve,Pin,Dismiss'

reviews = [
    {'message': 'I did not really like this place at all.',                 'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'The food was enjoyable!',                                  'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'This place was honestly a wonderful experience.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'I will never come back here. The bathrooms were nasty.',   'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'What surprised me was their gyro. It was yummy.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'They should clean up the bathrooms!',                      'sentiment': 'Negative', 'users': '', 'action': ACTIONS}
]


def instantiate_updaters(app):
    Updater(app, "/update-test", reviews)
    
    total_reviews = 700
    negative_reviews = 300
    positive_reviews = total_reviews - negative_reviews
    Updater(app, "/mini-comps", [
        {'message': 'Total Reviews', 'number': total_reviews},
        {'message': 'Negative Reviews', 'number': negative_reviews},
        {'message': 'Positive Reviews', 'number': positive_reviews}
    ])
