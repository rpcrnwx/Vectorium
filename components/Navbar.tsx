'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, LogIn, UserPlus, ShoppingCart, Wallet, Bell, Shield, Users, Briefcase, HelpCircle } from 'lucide-react';
import { useAppSelector } from '@/lib/redux/hooks';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const walletBalance = useAppSelector(state => state.wallet.balance);
  const carbonCredits = useAppSelector(state => state.wallet.carbonCredits);
  const totalCredits = carbonCredits.reduce((acc, credit) => acc + credit.quantity, 0);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setIsLoggedIn(!!data.user);
    };

    checkUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg"
                alt="Vectorium"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Vectorium</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link 
                href="/how-it-works" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  pathname?.includes('/how-it-works') 
                    ? 'text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>How It Works</span>
              </Link>

              <Link 
                href="/marketplace" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  pathname?.includes('/marketplace') 
                    ? 'text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Marketplace</span>
              </Link>

              <Link 
                href="/security" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  pathname?.includes('/security') 
                    ? 'text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                <Shield className="w-4 h-4" />
                <span>Security</span>
              </Link>

              <Link 
                href="/about" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  pathname?.includes('/about') 
                    ? 'text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                <Users className="w-4 h-4" />
                <span>About</span>
              </Link>

              <Link 
                href="/careers" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  pathname?.includes('/careers') 
                    ? 'text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Careers</span>
              </Link>
              
              {isLoggedIn && (
                <Link 
                  href="/wallet" 
                  className={`flex items-center gap-2 text-sm font-medium ${
                    pathname?.includes('/wallet') 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-emerald-600'
                  } transition-colors`}
                >
                  <Wallet className="w-4 h-4" />
                  <span>Wallet</span>
                  {totalCredits > 0 && (
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {totalCredits}
                    </span>
                  )}
                </Link>
              )}
              
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-medium text-emerald-600">${walletBalance.toLocaleString()}</span>
                  </div>
                  <Link
                    href="/dashboard"
                    className={`text-sm font-medium ${
                      pathname?.includes('/dashboard') 
                        ? 'text-emerald-600' 
                        : 'text-gray-600 hover:text-emerald-600'
                    } transition-colors`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/auth/login"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm font-medium"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg"
                  alt="Vectorium"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Vectorium</span>
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-4 space-y-4">
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>How It Works</span>
                </Link>

                <Link
                  href="/marketplace"
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Marketplace</span>
                </Link>

                <Link
                  href="/security"
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-5 h-5" />
                  <span>Security</span>
                </Link>

                <Link
                  href="/about"
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="w-5 h-5" />
                  <span>About</span>
                </Link>

                <Link
                  href="/careers"
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Careers</span>
                </Link>
                
                {isLoggedIn && (
                  <Link
                    href="/wallet"
                    className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Wallet className="w-5 h-5" />
                    <span>Wallet</span>
                    {totalCredits > 0 && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded-full">
                        {totalCredits}
                      </span>
                    )}
                  </Link>
                )}
                
                {isLoggedIn && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>Balance:</span>
                    <span className="font-medium text-emerald-600">${walletBalance.toLocaleString()}</span>
                  </div>
                )}
                
                {isLoggedIn && (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Dashboard</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="p-4 border-t space-y-4">
              {isLoggedIn ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 w-full text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <span>Sign Out</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center gap-2 w-full bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}