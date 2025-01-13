import { Progress } from "@/components/ui/progress";
import project1 from "../../public/assets/hello1.png";
import project2 from "../../public/assets/proj6.png";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-purple-500">Madan</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-white/0 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Background</h3>
                    <p className="text-white/50 mb-6">
                        I am a Software Engineer with expertise in React, Java, Spring Boot, JavaScript, Docker, and AWS Cloud. I specialize in designing and implementing scalable web applications and microservices, delivering high-quality, performance-driven solutions.
                    </p>
                    <div className="rounded-lg p-4 mb-4 border border-white/0">
                        <code className="text-white-500/50">
                            const skills = `
                            <br />
                            &nbsp;&nbsp;&quot;Java&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;JavaScript&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;React&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;Node.js&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;Python&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;SQL&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;AWS&quot;,
                            <br />
                            `;
                        </code>
                    </div>
                </div>

                <div className="border border-white/0 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Expertise</h3>
                    <p className="text-white/50">I specialize in building robust web applications using modern technologies.</p>
                    <div className="mt-4 relative border border-white/0 rounded-lg p-4 h-[220px] overflow-hidden">
                        <Image
                            src={project1}
                            alt="project 1"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="border border-white/0 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Skills</h3>
                    <p className="text-white/50 mb-4">
                        I&apos;m proficient in a wide range of technologies and constantly updating my skill set
                    </p>
                    <div className="grid text-center gap-4">
                        <div className="border border-white/0 rounded-lg p-3">
                            <h4 className="text-purple-500 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div className="border border-white/0 rounded-lg p-3">
                            <h4 className="text-purple-500 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Python</li>
                                <li>TypeScript</li>
                                <li>Java</li>
                                <li>Node.Js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-white/0 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Front-end</label>
                            <Progress value={90} className="bg-purple-500/40 [&>div]:bg-purple-500/80" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Back-end</label>
                            <Progress value={85} className="bg-purple-500/40 [&>div]:bg-purple-500/80" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">DevOps</label>
                            <Progress value={80} className="bg-purple-500/40 [&>div]:bg-purple-500/80" />
                        </div>
                        <h3 className="text-2xl font-bold mt-4">Approach</h3>
                        <p className="text-white/50">
                            I believe in writing clean, maintainable code and following best practices.
                        </p>
                    </div>
                </div>

                <div className="border border-white/0 rounded-lg p-6">
                    <div className="h-[200px] overflow-hidden p-4 border border-white/0 relative">
                        <Image
                            src={project2}
                            alt="project 2"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Goals</h3>
                        <p className="text-white/50">
                            My goal is to continue growing as a developer, tackling challenging projects
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
