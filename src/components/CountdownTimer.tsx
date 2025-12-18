import { useState, useEffect } from 'react';
import { Clock, Calendar, Users, Zap } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2026-02-02T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, icon: Calendar },
    { label: 'Hours', value: timeLeft.hours, icon: Clock },
    { label: 'Minutes', value: timeLeft.minutes, icon: Users },
    { label: 'Seconds', value: timeLeft.seconds, icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Program Starts In
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the next cohort starting February 2nd, 2026. Don't miss your chance to transform your career!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {timeUnits.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Invite your friends and join the movement
          </div>
          <p className="text-muted-foreground">
            Secure your spot now and be part of the next generation of tech leaders
          </p>
        </div>
      </div>
    </section>
  );
};