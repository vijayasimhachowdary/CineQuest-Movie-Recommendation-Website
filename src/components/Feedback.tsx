import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <section id="feedback" className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <MessageSquare size={48} className="mx-auto mb-4 text-sky-300" />
          <h2 className="text-3xl font-bold mb-8 text-white">Share Your Feedback</h2>
          {submitted ? (
            <div className="bg-green-100 bg-opacity-90 text-green-700 p-4 rounded-lg">
              Thank you for your feedback! We appreciate your input.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-32 p-4 rounded-lg border border-sky-200 bg-white bg-opacity-90 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Tell us what you think about CineQuest..."
                required
              />
              <button
                type="submit"
                className="bg-sky-600 text-white py-3 px-8 rounded-lg hover:bg-sky-700 transition-colors duration-200"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}