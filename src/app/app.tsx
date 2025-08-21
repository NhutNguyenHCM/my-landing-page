export default function app(): {
  name: string;
  desc: string;
  image: string;
  link: string;
}[] {
  const apps = [
    {
      name: "AI Text To Speech App",
      desc: "Chuyển văn bản thành giọng nói tự nhiên, hỗ trợ nhiều ngôn ngữ.",
      image:
        "https://lottie.host/f5573f3e-8dd8-4712-87f6-2530237c7ab7/yzVr1Paedi.lottie",
      link: "/feature/tts",
    },
    {
      name: "AI Gen Comics App",
      desc: "Tạo truyện tranh tự động bằng AI từ ý tưởng của bạn.",
      image:
        "https://lottie.host/1236d03d-b027-4440-8072-55dee97c3aed/FgwW3YVtYB.lottie",
      link: "#",
    },
    {
      name: "AI Chat App",
      desc: "Trò chuyện với AI thông minh, hỗ trợ đa lĩnh vực.",
      image:
        "https://lottie.host/d9e23b24-331f-4e21-b215-e47cf41ac7d8/Yflw71CS8I.lottie",
      link: "#",
    },
    {
      name: "AI Generate Postcast",
      desc: "Tạo podcast tự động từ ý tưởng của bạn.",
      image:
        "https://lottie.host/d9e23b24-331f-4e21-b215-e47cf41ac7d8/Yflw71CS8I.lottie",
      link: "#",
    },
  ];

  return apps;
}
