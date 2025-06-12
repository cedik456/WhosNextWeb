import { useState, useEffect, useRef } from "react";

export const useLoginLock = (maxAttempts = 5, lockDuration = 2 * 60 * 1000) => {
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockCountdown, setLockCountdown] = useState(0);
  const lockUntilRef = useRef(null);

  useEffect(() => {
    if (isLocked) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, lockUntilRef.current - Date.now());
        setLockCountdown(Math.ceil(remaining / 1000));
        if (remaining <= 0) {
          clearInterval(interval);
          setIsLocked(false);
          setAttempts(0);
          lockUntilRef.current = null;
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLocked]);

  const reportLoginResult = (wasSuccessful) => {
    if (wasSuccessful) {
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3 && newAttempts <= maxAttempts) {
        setIsLocked(true);
        lockUntilRef.current = Date.now() + lockDuration;
      }
    }
  };

  return { isLocked, lockCountdown, reportLoginResult };
};
