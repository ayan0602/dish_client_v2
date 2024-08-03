import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Updated sample data: Replace this with your actual dataset
data = {
    'review': [
        'The food was absolutely delicious and the service was excellent!',
        'I had a terrible experience. The food was cold and the staff was rude.',
        'Great atmosphere and the dishes were tasty. Highly recommend!',
        'The worst dining experience. The place was dirty and the food was bland.',
        'Amazing menu with a lot of variety. Will definitely come back!',
        'Poor service and overpriced. I will not return.'
    ],
    'sentiment': [1, 0, 1, 0, 1, 0]  # 1 for positive, 0 for negative
}

# Load data into a DataFrame
df = pd.DataFrame(data)

# Text preprocessing
# Convert the text data into numerical features using CountVectorizer
vectorizer = CountVectorizer(stop_words='english')
X = vectorizer.fit_transform(df['review'])

# Labels
y = df['sentiment']

#print(df)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)
cm = confusion_matrix(y_test, y_pred)

print(f'Accuracy: {accuracy}')
print('Classification Report:')
print(report)
print('Confusion Matrix:')
print(cm)


# Example function to predict sentiment of new reviews
def predict_sentiment(review):
    review_vectorized = vectorizer.transform([review])
    prediction = model.predict(review_vectorized)
    return 'Positive' if prediction[0] == 1 else 'Negative'


ACTIONS = 'Resolve,Pin,Dismiss'

reviews = [
    {'message': 'I did not really like this place at all.',                 'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'The food was enjoyable!',                                  'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'This place was honestly a wonderful experience.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'I will never come back here. The bathrooms were nasty.',   'sentiment': 'Negative', 'users': '', 'action': ACTIONS},
    {'message': 'What surprised me was their gyro. It was yummy.',          'sentiment': 'Positive', 'users': '', 'action': ACTIONS},
    {'message': 'They should clean up the bathrooms!',                      'sentiment': 'Negative', 'users': '', 'action': ACTIONS}
]

# Update each review's sentiment based on the prediction
for review in reviews:
    reviewInput = review['message']
    predicted_sentiment = predict_sentiment(reviewInput)
    review['predicted_sentiment'] = predicted_sentiment  # Add the prediction to the review dictionary

# Print the reviews with the predicted sentiment
for review in reviews:
    print(f"Message: {review['message']}")
    print(f"Actual Sentiment: {review['sentiment']}")
    print(f"Predicted Sentiment: {review['predicted_sentiment']}")
    print('-' * 50)