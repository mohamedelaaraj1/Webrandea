import React from 'react';
import { REVIEWS } from '../constants';
import { Star, CheckCircle, PlayCircle, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const videoReviews = REVIEWS.filter(r => r.type === 'video');
  const textReviews = REVIEWS.filter(r => r.type !== 'video');

  return (
    <section id="reviews" className="py-24 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it. Hear directly from the founders and directors we've helped scale.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="text-brand-400 font-bold text-lg">4.9/5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-green-500 mx-0.5 rounded-[1px]" />)}
            </div>
            <span className="text-gray-400 text-xs ml-2 uppercase tracking-wide">Verified Ratings</span>
          </div>
        </div>

        {/* Video Success Stories */}
        {videoReviews.length > 0 && (
          <div className="mb-20">
             <div className="flex items-center space-x-2 mb-8">
                <PlayCircle className="w-5 h-5 text-brand-500" />
                <h3 className="text-xl font-bold text-white">Video Feedback</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoReviews.map((review) => (
                    <div key={review.id} className="group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-brand-500/50 transition-all cursor-pointer h-[400px]">
                        {/* Background Image */}
                        <img 
                            src={review.videoThumbnail} 
                            alt={review.user} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-90"></div>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                <PlayCircle className="w-8 h-8 text-white fill-brand-600" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="px-2 py-1 bg-brand-600 text-white text-xs font-bold uppercase rounded">Success Story</span>
                                <span className="text-xs text-gray-300 border border-white/10 px-2 py-1 rounded">{review.service}</span>
                            </div>
                            <p className="text-lg text-white font-medium italic mb-6 leading-relaxed">"{review.comment}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-brand-900 border border-brand-500/30 flex items-center justify-center text-white font-bold mr-3">
                                    {review.user.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold">{review.user}</div>
                                    <div className="text-sm text-gray-400">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        )}

        {/* Verified Reviews Grid */}
        <div>
           <div className="flex items-center space-x-2 mb-8">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-bold text-white">Verified Reviews</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textReviews.map((review) => (
                <div key={review.id} className="p-8 rounded-2xl bg-[#13161c] border border-dark-border hover:border-brand-500/20 transition-all hover:-translate-y-1 duration-300">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-blue-900 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {review.user.charAt(0)}
                        </div>
                        <div>
                            <div className="text-white font-bold flex items-center">
                                {review.user}
                                <CheckCircle className="w-3 h-3 text-blue-500 ml-1" />
                            </div>
                            <div className="text-xs text-brand-400 uppercase tracking-wide font-medium mt-0.5">{review.role}</div>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} 
                            />
                        ))}
                    </div>
                </div>
                
                <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-white/5 rotate-180" />
                    <p className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-brand-500/30">
                        {review.comment}
                    </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                    <span className="text-gray-500">{review.date}</span>
                    <span className="font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                        {review.service}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;