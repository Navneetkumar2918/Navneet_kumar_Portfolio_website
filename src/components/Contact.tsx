import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emailjs from '@emailjs/browser';

const Contact: React.FC<{ editMode: boolean }> = ({ editMode }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const formRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Editable text states
  const [connectTitle, setConnectTitle] = useState("Let's Connect");
  const [connectDesc, setConnectDesc] = useState("I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.");
  const [emailTitle, setEmailTitle] = useState("Email");
  const [emailValue, setEmailValue] = useState("navneetkumar18112002@gmail.com");
  const [phoneTitle, setPhoneTitle] = useState("Phone");
  const [phoneValue, setPhoneValue] = useState("+91 9120879134");
  const [locationTitle, setLocationTitle] = useState("Location");
  const [locationValue, setLocationValue] = useState("Prayagraj, Uttar Pradesh, India");
  const [sendTitle, setSendTitle] = useState("Send Message");
  const [sendNameLabel, setSendNameLabel] = useState("Your Name");
  const [sendNamePlaceholder, setSendNamePlaceholder] = useState("Enter your name");
  const [sendEmailLabel, setSendEmailLabel] = useState("Email Address");
  const [sendEmailPlaceholder, setSendEmailPlaceholder] = useState("your@email.com");
  const [sendSubjectLabel, setSendSubjectLabel] = useState("Subject");
  const [sendSubjectPlaceholder, setSendSubjectPlaceholder] = useState("What's this about?");
  const [sendMessageLabel, setSendMessageLabel] = useState("Message");
  const [sendMessagePlaceholder, setSendMessagePlaceholder] = useState("Tell me about your project or inquiry...");
  const [responseTitle, setResponseTitle] = useState("Response Time");
  const [responseDesc, setResponseDesc] = useState("I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) return; // prevent submit in editMode
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured properly.');
        setIsSubmitting(false);
        setSubmitStatus('error');
        return;
      }
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, title: emailTitle, value: emailValue, setTitle: setEmailTitle, setValue: setEmailValue, color: 'text-blue-600' },
    { icon: Phone, title: phoneTitle, value: phoneValue, setTitle: setPhoneTitle, setValue: setPhoneValue, color: 'text-green-600' },
    { icon: MapPin, title: locationTitle, value: locationValue, setTitle: setLocationTitle, setValue: setLocationValue, color: 'text-purple-600' },
  ];

  useEffect(() => {
    const adjustHeight = () => {
      if (!leftRef.current || !formRef.current) return;
      const formHeight = formRef.current.offsetHeight;
      const responseExtra = 10;
      const totalBoxes = contactInfo.length + 1;
      const spaceBetween = 16;
      const calculatedHeight = (formHeight - spaceBetween * (totalBoxes - 1)) / totalBoxes;
      leftRef.current.childNodes.forEach((child: any, i) => {
        if (i < contactInfo.length) child.style.minHeight = `${calculatedHeight - 10}px`;
        else child.style.minHeight = `${calculatedHeight + responseExtra}px`;
      });
    };
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
  }, [isVisible]);

  const inputStyle = editMode
    ? 'cursor-default select-none pointer-events-auto focus:outline-none focus:ring-0 focus:border-gray-200'
    : '';

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setConnectTitle(e.currentTarget.textContent || '')} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{connectTitle}</h2>
            <div contentEditable={editMode} suppressContentEditableWarning className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setConnectDesc(e.currentTarget.textContent || '')} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">{connectDesc}</p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div ref={leftRef} className={`space-y-4 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 cursor-text select-text">
                  <div className={`p-4 bg-gradient-to-r ${info.color} bg-opacity-10 rounded-xl mr-6`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 contentEditable={editMode} suppressContentEditableWarning onInput={(e) => info.setTitle(e.currentTarget.textContent || '')} className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{info.title}</h4>
                    <p contentEditable={editMode} suppressContentEditableWarning onInput={(e) => info.setValue(e.currentTarget.textContent || '')} className="text-lg dark:text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h4 contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setResponseTitle(e.currentTarget.textContent || '')} className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{responseTitle}</h4>
                <p contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setResponseDesc(e.currentTarget.textContent || '')} className="text-lg dark:text-gray-300">{responseDesc}</p>
              </div>
            </div>

            <div ref={formRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col h-full justify-between">
                <h3 contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setSendTitle(e.currentTarget.textContent || '')} className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{sendTitle}</h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <p className="text-red-700 dark:text-red-300">Something went wrong. Please try again later.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between space-y-4">
                  <div className="space-y-4">
                    <div className="group">
                      <label contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setSendNameLabel(e.currentTarget.textContent || '')} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{sendNameLabel}</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder={sendNamePlaceholder} readOnly={editMode} className={`w-full px-4 py-4 bg-[#f0f5ff] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg ${inputStyle}`}/>
                    </div>
                    <div className="group">
                      <label contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setSendEmailLabel(e.currentTarget.textContent || '')} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{sendEmailLabel}</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder={sendEmailPlaceholder} readOnly={editMode} className={`w-full px-4 py-4 bg-[#f0f5ff] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg ${inputStyle}`}/>
                    </div>
                    <div className="group">
                      <label contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setSendSubjectLabel(e.currentTarget.textContent || '')} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{sendSubjectLabel}</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder={sendSubjectPlaceholder} readOnly={editMode} className={`w-full px-4 py-4 bg-[#f0f5ff] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg break-words ${inputStyle}`}/>
                    </div>
                  </div>

                  <div className="group mt-4">
                    <label contentEditable={editMode} suppressContentEditableWarning onInput={(e) => setSendMessageLabel(e.currentTarget.textContent || '')} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{sendMessageLabel}</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder={sendMessagePlaceholder} readOnly={editMode} className={`w-full px-4 py-3 bg-[#f0f5ff] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg resize-none ${inputStyle}`}/>
                  </div>

                  <button type="submit" disabled={isSubmitting || editMode} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"/> : <Send className="w-5 h-5 mr-2"/>}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
