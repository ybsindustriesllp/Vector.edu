FROM ubuntu:20.04

# Avoid tzdata interactive config
ENV DEBIAN_FRONTEND=noninteractive

# Update and install required packages
RUN apt-get update && apt-get install -y \
    xrdp dbus-x11 \
    xfce4 xfce4-terminal xfce4-session xfce4-panel xfce4-settings \
    firefox \
    python3 python3-pip \
    nodejs npm \
    git \
    wget \
    curl \
    gnupg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install VS Code
RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft.gpg && \
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list && \
    apt-get update && apt-get install -y code && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Create a student user
RUN useradd -m -s /bin/bash student && \
    echo "student:student123" | chpasswd && \
    adduser student sudo

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# XRDP uses 3389 by default
EXPOSE 3389

CMD ["/start.sh"]
