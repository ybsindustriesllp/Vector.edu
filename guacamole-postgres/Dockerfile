# Dockerfile
FROM ubuntu:22.04

# Set non-interactive frontend to avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install basic tools and desktop
RUN apt-get update && apt-get install -y \
    xfce4 \
    xrdp \
    python3 \
    python3-pip \
    git \
    wget \
    curl \
    xterm \         
    lxterminal \     
    && apt-get clean

# Install Firefox from Mozilla Team PPA (not Snap)
RUN apt-get remove -y --purge firefox* && \
    rm -rf /var/lib/snapd && \
    apt-get install -y software-properties-common && \
    add-apt-repository -y ppa:mozillateam/ppa && \
    echo 'Package: *' > /etc/apt/preferences.d/mozilla-firefox && \
    echo 'Pin: release o=LP-PPA-mozillateam' >> /etc/apt/preferences.d/mozilla-firefox && \
    echo 'Pin-Priority: 1001' >> /etc/apt/preferences.d/mozilla-firefox && \
    apt-get update && \
    apt-get install -y -t 'o=LP-PPA-mozillateam' firefox && \
    apt-mark hold firefox && \
    apt-get clean

# Install Visual Studio Code (native desktop application)
RUN wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg && \
    install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg && \
    echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list && \
    apt-get update && \
    apt-get install -y code && \
    rm -f packages.microsoft.gpg && \
    apt-get clean

# Install Node.js from NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Docker CLI and dependencies
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release && \
    mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install -y docker-ce-cli && \
    apt-get clean

# Create student user
RUN useradd -m -s /bin/bash student && \
    echo "student:student123" | chpasswd

# Fix Python symlink and browser issues
RUN ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip && \
    apt-get install -y xfce4-settings && \
    mkdir -p /home/student/.config/xfce4 && \
    echo "[Default Applications]" > /home/student/.config/xfce4/helpers.rc && \
    echo "WebBrowser=firefox.desktop" >> /home/student/.config/xfce4/helpers.rc && \
    echo "TerminalEmulator=xterm.desktop" >> /home/student/.config/xfce4/helpers.rc && \
    chown -R student:student /home/student

# Set up RDP
RUN echo "xfce4-session" > /home/student/.xsession && \
    chown student:student /home/student/.xsession && \
    mkdir -p /var/run/xrdp && \
    chmod 777 /var/run/xrdp

# Set XTERM as default terminal
RUN update-alternatives --set x-terminal-emulator /usr/bin/xterm

# Additional browser dependencies
RUN apt-get update && apt-get install -y \
    dbus-x11 \
    libasound2 \
    libgtk-3-0 \
    libnss3 \
    libxss1 \
    libxtst6 \
    && apt-get clean

# Create Desktop directory and shortcut for VS Code
RUN mkdir -p /home/student/Desktop && \
    echo '[Desktop Entry]' > /usr/share/applications/code.desktop && \
    echo 'Name=Visual Studio Code' >> /usr/share/applications/code.desktop && \
    echo 'Exec=code' >> /usr/share/applications/code.desktop && \
    echo 'Icon=code' >> /usr/share/applications/code.desktop && \
    echo 'Type=Application' >> /usr/share/applications/code.desktop && \
    echo 'Categories=Development;IDE;' >> /usr/share/applications/code.desktop && \
    cp /usr/share/applications/code.desktop /home/student/Desktop/ && \
    chown -R student:student /home/student/Desktop

# Create app directory and set permissions
RUN mkdir -p /app/backend /app/frontend && \
    chown -R student:student /app

# Expose ports
EXPOSE 3389 8000 3000

# Start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]