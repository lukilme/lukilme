<template>
<div class="max-w-7xl mx-auto px-4 md:px-8 py-8 relative z-10">
        <!-- Header -->
        <header class="text-center mb-16">
            <h3 class="glitch text-xl md:text-4xl lg:text-6xl font-black tracking-tighter text-black glitch-effect">
                Tech Stack
            </h3>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend -->
            <div class="bg-neo-pink text-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Frontend
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-white"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">React.js</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Next.js</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">TypeScript</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Tailwind CSS</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-neo-yellow text-black border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Backend
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-black"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-black bg-opacity-10 border-2 border-black hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-black mr-2 rounded-sm"></div>
                        <span class="flex-1">Python</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-black bg-opacity-10 border-2 border-black hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-black mr-2 rounded-sm"></div>
                        <span class="flex-1">Java</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-black bg-opacity-10 border-2 border-black hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-black mr-2 rounded-sm"></div>
                        <span class="flex-1">Spring Boot</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-black bg-opacity-10 border-2 border-black hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-black mr-2 rounded-sm"></div>
                        <span class="flex-1">Flask</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black"></div>
                            <div class="w-4 h-1 bg-black opacity-30"></div>
                            <div class="w-4 h-1 bg-black opacity-30"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-neo-purple text-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Database
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-white"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Hive</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">PostgreSQL</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">MongoDB</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Redis</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-neo-blue text-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Tools
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-white"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Git & GitHub</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Docker</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Ansiable</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Figma</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    
                </ul>
            </div>

            <div class="bg-neo-orange text-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Mobile
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-white"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Kotlin</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Jetpack compose</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Flutter</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-neo-green text-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-6 rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_black]">
                <h2 class="text-xl md:text-2xl font-black uppercase mb-4 relative">
                    Cloud
                    <div class="absolute -bottom-1 left-0 w-12 h-1 bg-white"></div>
                </h2>
                <ul class="space-y-2">
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Huawei</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">AWS</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                    <li class="flex items-center p-2 bg-white bg-opacity-10 border-2 border-white hover:translate-x-2 transition-transform duration-200">
                        <div class="w-5 h-5 bg-white mr-2 rounded-sm"></div>
                        <span class="flex-1">Azure</span>
                        <div class="flex gap-1 ml-2">
                            <div class="w-4 h-1 bg-white"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                            <div class="w-4 h-1 bg-white bg-opacity-30"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

export default{
    name: "Techstack",
    
}

</script>