import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button, Card, ProgressBar, Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.heading}>
        Welcome back 👋
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Current Course</Text>
          <Text variant="bodyMedium" style={styles.muted}>
            Introduction to Python
          </Text>

          <Text variant="bodySmall" style={styles.progressLabel}>
            Progress: 40%
          </Text>
          <ProgressBar progress={0.4} style={styles.progressBar} />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Your Stats</Text>
          <Text style={styles.stat}>XP: 240</Text>
          <Text style={styles.stat}>Badges: 3</Text>
          <Text style={styles.stat}>Completed Lessons: 8</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.button}
        contentStyle={styles.buttonContent}
        onPress={() => router.push('/')}
      >
        Log out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
  },
  card: {
    marginBottom: 16,
    borderRadius: 20,
    elevation: 3,
  },
  muted: {
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 14,
  },
  progressLabel: {
    marginBottom: 8,
    color: '#6b7280',
  },
  progressBar: {
    height: 8,
    borderRadius: 8,
  },
  stat: {
    marginTop: 8,
    color: '#374151',
  },
  button: {
    borderRadius: 14,
    marginTop: 8,
  },
  buttonContent: {
    paddingVertical: 6,
  },
});